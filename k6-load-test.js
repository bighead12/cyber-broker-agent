/* eslint-disable no-undef */
import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

const errorRate = new Rate('errors');

export const options = {
  scenarios: {
    smoke: {
      executor: 'constant-vus',
      vus: 1,
      duration: '15s',
    },
  },
  thresholds: {
    http_req_duration: ['p(95)<2000'],
    http_req_failed: ['rate<0.5'],
    errors: ['rate<0.5'],
  },
};

const BASE_URL = __ENV.BASE_URL || 'http://127.0.0.1:8000';
const API_KEY = __ENV.API_KEY || 'cyber-broker-secret-key-2024';

const headers = {
  'Content-Type': 'application/json',
  'X-API-Key': API_KEY,
};

export default function () {
  let response;
  let success;

  response = http.get(`${BASE_URL}/health`);
  success = check(response, {
    'health check status is 200': (r) => r.status === 200,
    'health check response time < 200ms': (r) => r.timings.duration < 200,
  });
  errorRate.add(!success);

  response = http.get(`${BASE_URL}/`);
  success = check(response, {
    'root status is 200': (r) => r.status === 200,
    'root response time < 200ms': (r) => r.timings.duration < 200,
  });
  errorRate.add(!success);

  response = http.get(`${BASE_URL}/api/properties`, { headers });
  success = check(response, {
    'get properties status is 200': (r) => {
      if (r.status !== 200) {
        console.log(`GET /api/properties failed: status=${r.status}, body=${r.body}`);
      }
      return r.status === 200;
    },
    'get properties response time < 500ms': (r) => r.timings.duration < 500,
    'get properties returns array': (r) => r.status === 200 && Array.isArray(r.json()),
  });
  errorRate.add(!success);

  response = http.post(
    `${BASE_URL}/api/properties`,
    JSON.stringify({
      address: '123 Performance Test St',
      city: 'Test City',
      state: 'TS',
      zipCode: '12345',
      price: 100000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1500,
      propertyType: 'house',
      listingStatus: 'active',
    }),
    { headers }
  );
  success = check(response, {
    'create property status is 200 or 201': (r) => {
      if (r.status !== 200 && r.status !== 201) {
        console.log(`POST /api/properties failed: status=${r.status}, body=${r.body}`);
      }
      return r.status === 200 || r.status === 201;
    },
    'create property response time < 500ms': (r) => (r.status === 200 || r.status === 201) ? r.timings.duration < 500 : true,
  });
  errorRate.add(!success);

  sleep(1);
}

export function handleSummary(data) {
  return {
    stdout: textSummary(data, { indent: ' ', enableColors: true }),
    'k6-report.json': JSON.stringify(data),
  };
}

function textSummary(data, opts) {
  const indent = opts.indent || '';

  let output = `${indent}Test Summary:\n`;
  output += `${indent}==============\n`;
  output += `${indent}Total Requests: ${data.metrics.http_reqs.values.count}\n`;
  output += `${indent}Failed Requests: ${data.metrics.http_req_failed.values.passes}\n`;
  output += `${indent}Avg Response Time: ${data.metrics.http_req_duration.values.avg.toFixed(2)}ms\n`;
  output += `${indent}p95 Response Time: ${data.metrics.http_req_duration.values['p(95)'].toFixed(2)}ms\n`;
  output += `${indent}p99 Response Time: ${data.metrics.http_req_duration.values['p(99)'].toFixed(2)}ms\n`;

  return output;
}

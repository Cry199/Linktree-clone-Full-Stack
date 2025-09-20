import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/vitest';

// Garante que a limpeza seja executada após cada teste
afterEach(() => {
  cleanup();
});
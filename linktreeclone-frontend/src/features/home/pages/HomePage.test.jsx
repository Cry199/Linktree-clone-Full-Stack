import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('should render the main title', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    const titleElement = screen.getByRole('heading', {
      name: /todos os seus links em um só lugar/i,
    });

    expect(titleElement).toBeInTheDocument();
  });
});
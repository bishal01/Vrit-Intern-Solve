import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Axios from 'axios';
import GetInfo from './GetInfo';

jest.mock('axios');

const mockData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

describe('DataFetcher Component', () => {
  it('should render loading state initially', () => {
    render(<GetInfo />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('should display fetched data when API call is successful', async () => {
    Axios.get.mockResolvedValueOnce({ data: mockData });

    render(<GetInfo />);

    await waitFor(() => expect(screen.getByText('Item 1')).toBeInTheDocument());
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('should display an error message when API call fails', async () => {
    Axios.get.mockRejectedValueOnce(new Error('API Error'));

    render(<GetInfo />);

    await waitFor(() => expect(screen.getByText(/error/i)).toBeInTheDocument());
  });
});
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

// Import necessary modules
import { Metadata } from 'next';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import ContractDetails from '@/components/contracts/contract-details';
import { Database } from '@/types/supabaseTypes';

// Define proper types
type Contract = Database['public']['Tables']['contracts']['Row'];

// Define ContractPageProps with params as an object (not Promise)
type ContractPageProps = {
  params: { id: string }; // Ensure params is an object with id
  searchParams: { [key: string]: string | string[] | undefined };
};

// Generate metadata for the page
export async function generateMetadata({
  params,
}: ContractPageProps): Promise<Metadata> {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: contract } = await supabase
    .from('contracts')
    .select('*')
    .eq('id', params.id)
    .single();

  if (!contract) {
    return {
      title: 'Contract Not Found',
      description: 'Contract details unavailable',
    };
  }

  return {
    title: `Contract ${contract.id}`,
    description: `Details for contract ${contract.id}`,
  };
}

// The main page component with updated type signature
export default async function ContractDetailsPage({
  params,
  searchParams,
}: ContractPageProps) {
  const supabase = createServerComponentClient<Database>({ cookies });

  try {
    const { data: contract, error } = await supabase
      .from('contracts')
      .select('*')
      .eq('id', params.id)
      .single();

    if (error) throw error;
    if (!contract) return <div>Contract not found</div>;

    return <ContractDetails contract={contract} />;
  } catch (error) {
    console.error('Error fetching contract:', error);
    return <div>Error loading contract: {error instanceof Error ? error.message : 'Unknown error'}</div>;
  }
}
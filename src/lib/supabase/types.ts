export interface ContractVersion {
  id: string
  contract_id: string
  version_number: number
  content: string
  title: string
  created_at: string
  created_by: string
  change_summary: string
}

export interface ContractDiff {
  added: string[]
  removed: string[]
  modified: string[]
}

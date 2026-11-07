export interface File {
  id: string
  name: string
  size: number
  icon: string
  type: 'folder' | 'file' | 'driver'
  child?: Files
  content?: string
}

export type Files = File[]

export interface ExeData {
  _exe: string
  [type: string]: unknown
}

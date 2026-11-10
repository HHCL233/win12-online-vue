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

export type Format2App = Record<
  string,
  (file: File) => {
    success: boolean
  }
>

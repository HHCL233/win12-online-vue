export interface File {
  id: string
  name: string
  size: number
  icon: string
  type: 'folder' | 'file' | 'driver'
  child?: Files
  content?: string
  appId?: string
}

export type Files = File[]

export interface ExeData {
  _exe: string
  [type: string]: unknown
}

// 打开文件后得到的结果 */
export interface FileLaunchIntent {
  appId: string
  props?: Record<string, unknown>
}

export type FormatHandlers = Record<string, (file: File) => FileLaunchIntent | null>

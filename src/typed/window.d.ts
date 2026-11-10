export interface WindowRecord {
  id: string
  appId: string
  title: string
  icon: string
  props: Record<string, unknown>
  isDockShow: boolean
  z: number
}

export type WindowCreateData = Omit<WindowRecord, 'id' | 'z'>

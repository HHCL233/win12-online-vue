import { appsRegistry } from '@/apps/registry'
import { useFilesStore } from '@/stores/files'
import { useWindowStore } from '@/stores/window'
import type { File } from '@/typed/file'

// 连接应用注册表 文件系统 窗口管理
export function useLauncher() {
  const windowStore = useWindowStore()
  const filesStore = useFilesStore()

  function launch(appId: string, props: Record<string, unknown> = {}) {
    const app = appsRegistry[appId]
    if (!app) return false

    if (app.singleton) {
      const existing = windowStore.findWindowByApp(appId)
      if (existing) return windowStore.focusWindow(existing.id)
    }

    windowStore.createWindow({
      appId,
      title: app.title,
      icon: app.icon,
      props,
      isDockShow: true,
    })
    return true
  }

  function openFile(file: File) {
    if (file.appId) return launch(file.appId)
    const result = filesStore.openFile(file)
    if (!result.success) return false
    return launch(result.intent.appId, result.intent.props)
  }

  return { launch, openFile }
}

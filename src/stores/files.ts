import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ExeData, File, Files, Format2App } from '@/typed/file'
import { useWindowStore } from './window'

export const useFilesStore = defineStore('files', () => {
  const windowStore = useWindowStore()

  const filesData = ref<Files>([
    {
      id: 'C:',
      name: 'C:',
      size: 0,
      icon: 'drive',
      type: 'driver',
      child: [
        {
          id: 'C:\\Windows',
          name: 'Windows',
          size: 0,
          icon: 'folder-system',
          type: 'folder',
          child: [
            {
              id: 'C:\\Windows\\System32',
              name: 'System32',
              size: 0,
              icon: 'folder-system',
              type: 'folder',
              child: [],
            },
            {
              id: 'C:\\Windows\\SysWOW64',
              name: 'SysWOW64',
              size: 0,
              icon: 'folder-system',
              type: 'folder',
              child: [],
            },
            {
              id: 'C:\\Windows\\WinSxS',
              name: 'WinSxS',
              size: 0,
              icon: 'folder-system',
              type: 'folder',
              child: [],
            },
            {
              id: 'C:\\Windows\\Fonts',
              name: 'Fonts',
              size: 0,
              icon: 'folder-system',
              type: 'folder',
              child: [],
            },
            {
              id: 'C:\\Windows\\Temp',
              name: 'Temp',
              size: 0,
              icon: 'folder-temp',
              type: 'folder',
              child: [],
            },
            {
              id: 'C:\\Windows\\explorer.exe',
              name: 'explorer.exe',
              size: 0,
              icon: 'file-exe',
              type: 'file',
              content: 'explorer',
            },
          ],
        },
        {
          id: 'C:\\Program Files',
          name: 'Program Files',
          size: 0,
          icon: 'folder-program',
          type: 'folder',
          child: [],
        },
        {
          id: 'C:\\Program Files (x86)',
          name: 'Program Files (x86)',
          size: 0,
          icon: 'folder-program',
          type: 'folder',
          child: [],
        },
        {
          id: 'C:\\Users',
          name: 'Users',
          size: 0,
          icon: 'folder-user',
          type: 'folder',
          child: [
            {
              id: 'C:\\Users\\Administrator',
              name: 'Administrator',
              size: 0,
              icon: 'folder-user',
              type: 'folder',
              child: [
                {
                  id: 'C:\\Users\\Administrator\\Desktop',
                  name: 'Desktop',
                  size: 0,
                  icon: 'folder',
                  type: 'folder',
                  child: [
                    {
                      name: '关于',
                      size: 0,
                      icon: '/icon/folder.svg',
                      type: 'file',
                      child: [],
                      id: 'about-win',
                    },
                  ],
                },
                {
                  id: 'C:\\Users\\Administrator\\Documents',
                  name: 'Documents',
                  size: 0,
                  icon: 'folder',
                  type: 'folder',
                  child: [],
                },
                {
                  id: 'C:\\Users\\Administrator\\Downloads',
                  name: 'Downloads',
                  size: 0,
                  icon: 'folder',
                  type: 'folder',
                  child: [],
                },
                {
                  id: 'C:\\Users\\Administrator\\Pictures',
                  name: 'Pictures',
                  size: 0,
                  icon: 'folder',
                  type: 'folder',
                  child: [],
                },
                {
                  id: 'C:\\Users\\Administrator\\Videos',
                  name: 'Videos',
                  size: 0,
                  icon: 'folder',
                  type: 'folder',
                  child: [],
                },
                {
                  id: 'C:\\Users\\Administrator\\Music',
                  name: 'Music',
                  size: 0,
                  icon: 'folder',
                  type: 'folder',
                  child: [],
                },
                {
                  id: 'C:\\Users\\Administrator\\AppData',
                  name: 'AppData',
                  size: 0,
                  icon: 'folder-hidden',
                  type: 'folder',
                  child: [
                    {
                      id: 'C:\\Users\\Administrator\\AppData\\Local',
                      name: 'Local',
                      size: 0,
                      icon: 'folder-hidden',
                      type: 'folder',
                      child: [],
                    },
                    {
                      id: 'C:\\Users\\Administrator\\AppData\\LocalLow',
                      name: 'LocalLow',
                      size: 0,
                      icon: 'folder-hidden',
                      type: 'folder',
                      child: [],
                    },
                    {
                      id: 'C:\\Users\\Administrator\\AppData\\Roaming',
                      name: 'Roaming',
                      size: 0,
                      icon: 'folder-hidden',
                      type: 'folder',
                      child: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'C:\\ProgramData',
          name: 'ProgramData',
          size: 0,
          icon: 'folder-hidden',
          type: 'folder',
          child: [],
        },
        {
          id: 'C:\\Boot',
          name: 'Boot',
          size: 0,
          icon: 'folder-system',
          type: 'folder',
          child: [],
        },
        {
          id: 'C:\\EFI',
          name: 'EFI',
          size: 0,
          icon: 'folder-system',
          type: 'folder',
          child: [],
        },
        {
          id: 'C:\\Recovery',
          name: 'Recovery',
          size: 0,
          icon: 'folder-system',
          type: 'folder',
          child: [],
        },
        {
          id: 'C:\\$Recycle.Bin',
          name: '$Recycle.Bin',
          size: 0,
          icon: 'folder-recycle',
          type: 'folder',
          child: [],
        },
        {
          id: 'C:\\PerfLogs',
          name: 'PerfLogs',
          size: 0,
          icon: 'folder',
          type: 'folder',
          child: [],
        },
        {
          id: 'C:\\System Volume Information',
          name: 'System Volume Information',
          size: 0,
          icon: 'folder-hidden',
          type: 'folder',
          child: [],
        },
        {
          id: 'C:\\pagefile.sys',
          name: 'pagefile.sys',
          size: 0,
          icon: 'file-sys',
          type: 'file',
          content: '',
        },
        {
          id: 'C:\\hiberfil.sys',
          name: 'hiberfil.sys',
          size: 0,
          icon: 'file-sys',
          type: 'file',
          content: '',
        },
        {
          id: 'C:\\swapfile.sys',
          name: 'swapfile.sys',
          size: 0,
          icon: 'file-sys',
          type: 'file',
          content: '',
        },
        {
          id: 'C:\\bootmgr',
          name: 'bootmgr',
          size: 0,
          icon: 'file-sys',
          type: 'file',
          content: '',
        },
        {
          id: 'C:\\BOOTNXT',
          name: 'BOOTNXT',
          size: 0,
          icon: 'file-sys',
          type: 'file',
          content: '',
        },
      ],
    },
  ])

  const format2App = ref<Format2App>({
    txt: (file: File) => {
      windowStore.openNewWindow('notepad', {
        file: file,
      })
      return { success: true }
    },
    exe: (file: File) => {
      if (!file.content) return { success: false }
      const exeData: ExeData = JSON.parse(file.content)
      if (!exeData._exe) return { success: false }
      windowStore.openNewWindow(exeData._exe, exeData)
      return { success: true }
    },
  })

  function openFile(file: File, customFormat2App: Format2App) {
    if (file.type != 'file') return { success: false }
    const format = file.name.split('.').pop()
    if (!format) return { success: false }
    const mergeFormat2App = {
      ...format2App.value,
      ...customFormat2App,
    }
    const app = mergeFormat2App[format]
    if (!app) return { success: false }
    return app(file)
  }

  function directory2Files(directoryStr: string, separator = '/') {
    let currentFiles = filesData.value
    const directorysArray = directoryStr.split(separator)
    console.log(directorysArray)
    for (const directory of directorysArray) {
      const tempFiles = currentFiles.find((file) => file.name === directory)
      if (!tempFiles || !tempFiles.child) return { success: false }
      currentFiles = tempFiles.child
    }
    return { success: true, files: currentFiles }
  }

  return { filesData, openFile, format2App, directory2Files }
})

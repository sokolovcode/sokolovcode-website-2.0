import type { SrcSetEntry } from '@srcset/runtime'

export type ImageModule = {
  default: string
  src: SrcSetEntry
  srcSet: SrcSetEntry[]
  placeholder?: string
}
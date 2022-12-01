/**
 * @description attachment element
 * @author wangfupeng
 */

type PureText = {
  text: string
}
type Element = {
  type: 'header1'
  children: PureText[]
}

export type AttachmentElement = {
  type: 'attachment'
  fileName: string
  link: string
  children: Element[]
}
// { type: 'header1', children: [ { text: 'hello' } ] }

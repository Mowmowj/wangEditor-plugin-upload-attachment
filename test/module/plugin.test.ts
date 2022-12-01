/**
 * @description plugin test
 * @author wangfupeng
 */

import createEditor from '../utils/create-editor'
import withAttachment from '../../src/module/plugin'
import { AttachmentElement } from '../../src/index'

describe('attachment plugin', () => {
  const editor = withAttachment(createEditor())
  const elem: AttachmentElement = {
    type: 'attachment',
    link: 'x',
    fileName: 'y',
    children: [{ type: 'header1', children: [{ text: '1231233' }] }],
  }

  it('isInline', () => {
    expect(editor.isInline(elem)).toBe(true)
  })

  it('isVoid', () => {
    expect(editor.isVoid(elem)).toBe(true)
  })
})

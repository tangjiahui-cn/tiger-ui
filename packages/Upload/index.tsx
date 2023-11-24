import React, { useState } from 'react';
import { Button, message, Space } from '..';
import { isString, isBoolean } from '../_utils';
import { useGetConfig } from '../ConfigProvider';
import { useStyle } from './style';
import { ACCEPT } from './ACCEPT';

export { ACCEPT } from './ACCEPT';

type OperateType = {
  preview?: boolean;
  delete?: boolean;
};

export interface UploadProps {
  /**
   * @description 组件样式
   */
  style?: React.CSSProperties;
  /**
   * @description 允许上传的类型
   */
  accept?: string | ACCEPT[];
  /**
   * @description 最大上传数量
   * @default 9
   */
  maxCount?: number;
  /**
   * @description 最大上传大小（单位：MB）
   * @default 10
   */
  maxSize?: number;
  /**
   * @description 超过最大上传大小报错消息
   */
  //
  maxSizeErrorMsg?: string | ((maxSize: number) => string);
  /**
   * @description 上传占位符
   */
  children?: any;
  /**
   * @description 上传内容支持操作
   */
  operate?: OperateType;
  /**
   * @description 自定义预览方法
   */
  onPreview?: (file: File) => void;
  /**
   * @description 文件列表change
   */
  onChange?: (files: File[]) => void;
}

type IFile = File & {
  id: number;
};

export default function Upload(props: UploadProps) {
  const { locale } = useGetConfig();
  const style = useStyle('upload');

  const {
    maxCount = 9,
    children = getDefaultPlaceholder(),
    maxSize = 10,
    maxSizeErrorMsg = `${locale.upload.sizeErrorMsg}${maxSize}MB`,
    onPreview = preview,
  } = props;

  const deleteAble: boolean = isBoolean(props?.operate?.delete) ? !!props?.operate?.delete : true;
  const previewAble: boolean = isBoolean(props?.operate?.preview)
    ? !!props?.operate?.preview
    : true;

  const [files, setFiles] = useState<IFile[]>([]);

  function getDefaultPlaceholder(): React.ReactNode {
    return <Button>{locale.upload.value}</Button>;
  }

  function checkSize(file: File) {
    return file.size / 1024 / 1024 <= maxSize;
  }

  function openUpload() {
    const gmt = new Date().valueOf();
    const input = document.createElement('input');
    input.type = 'file';
    if (isString(props?.accept)) {
      input.accept = props?.accept;
    } else if (Array.isArray(props?.accept)) {
      input.accept = props?.accept?.join(',');
    }
    input.click();
    input.onchange = function (e: any) {
      const file = e?.target?.files?.[0];
      if (!file) {
        throw new Error('file upload fail!');
      }
      if (!checkSize(file)) {
        const msg = isString(maxSizeErrorMsg) ? maxSizeErrorMsg : maxSizeErrorMsg?.(maxSize);
        message.warn(msg);
        return;
      }
      uploadFile(file, gmt);
    };
  }

  function uploadFile(file: File, id: number) {
    setFiles((files) => {
      const fileList: IFile[] = [Object.assign(file, { id }), ...files];
      props?.onChange?.(fileList);
      return fileList;
    });
  }

  // TODO: 等待image支持函数式预览
  function preview(file: File) {}

  function handleDeleteFile(file: IFile) {
    setFiles((files: IFile[]) => {
      const fileList = files.filter((x) => x.id !== file.id);
      props?.onChange?.(fileList);
      return fileList;
    });
  }

  return (
    <div className={style.upload()} style={props?.style}>
      {files.length < maxCount && <div onClick={() => openUpload()}>{children}</div>}
      {files.map((file: IFile) => {
        return (
          <div key={file.id} className={style.uploadItem()}>
            <div className={style.uploadItemName()} title={file.name}>
              {file.name}
            </div>
            <Space>
              {previewAble && (
                <Button size={'small'} type={'text'} onClick={() => onPreview(file)}>
                  预览
                </Button>
              )}
              {deleteAble && (
                <Button size={'small'} type={'text'} onClick={() => handleDeleteFile(file)}>
                  删除
                </Button>
              )}
            </Space>
          </div>
        );
      })}
    </div>
  );
}

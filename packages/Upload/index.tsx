import React, { useState } from 'react';
import { Button, message, Space } from '..';
import styles from './index.less';
import { isString, isBoolean } from '../_utils';
import { useGetConfig } from '../ConfigProvider';

type OperateType = {
  preview?: boolean;
  delete?: boolean;
};

export interface UploadProps {
  // 样式
  style?: React.CSSProperties;
  // 允许上传文件类型
  accept?: string;
  // 最大上传数量
  maxCount?: number;
  // 最大上传大小（单位：MB）
  maxSize?: number;
  // 超过最大上传大小报错
  maxSizeErrorMsg?: string | ((maxSize: number) => string);
  // 占位符
  children?: any;
  // 上传内容操作
  operate?: OperateType;
  // 预览方法
  onPreview?: (file: File) => void;
  // 文件列表change
  onChange?: (files: File[]) => void;
}

type IFile = File & {
  id: number;
};

export default function Upload(props: UploadProps) {
  const { locale } = useGetConfig();

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
    <div className={styles['upload']} style={props?.style}>
      {files.length < maxCount && <div onClick={() => openUpload()}>{children}</div>}
      {files.map((file: IFile) => {
        return (
          <div key={file.id} className={styles['upload-item']}>
            <div className={styles['upload-item-name']} title={file.name}>
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

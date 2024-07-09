import React, { DOMAttributes, ForwardedRef, RefAttributes, useState } from 'react';
import { Button, message, Space } from '@/index';
import { isString, isBoolean } from '@/_utils';
import { ACCEPT } from './ACCEPT';
import { useLocale, usePrefix } from '@/ConfigProvider/ConfigProvider';
import classNames from 'classnames';
import './upload.less';

type IFile = File & {
  id: number;
};

type OperateType = {
  preview?: boolean;
  delete?: boolean;
};

export interface BaseUploadProps {
  /** allow upload type */
  accept?: string | ACCEPT[];
  /** max upload count */
  maxCount?: number;
  /** max upload file size (unit: MB) */
  maxSize?: number;
  /** the error message while over the max upload size.*/
  maxSizeErrorMsg?: string | ((maxSize: number) => string);
  /** file operate type */
  operate?: OperateType;
  /** preview callback */
  onPreview?: (file: File) => void;
  /** fileList change callback */
  onChange?: (files: File[]) => void;
  /** style */
  style?: React.CSSProperties;
  /** className */
  className?: string;
}

export type UploadProps = BaseUploadProps &
  DOMAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement>;

export type UploadFC = React.ForwardRefExoticComponent<UploadProps>;
const Upload: UploadFC = React.forwardRef(function Upload(
  props: UploadProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const locale = useLocale();
  const prefix = usePrefix('upload');

  const {
    accept,
    operate,
    onChange,
    style,
    className,
    maxCount = 9,
    children = getDefaultPlaceholder(),
    maxSize = 10,
    maxSizeErrorMsg = `${locale.upload.sizeErrorMsg}${maxSize}MB`,
    onPreview = preview,
    ...rest
  } = props;

  const deleteAble: boolean = isBoolean(operate?.delete) ? !!operate?.delete : true;
  const previewAble: boolean = isBoolean(operate?.preview) ? !!operate?.preview : true;

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
    if (isString(accept)) {
      input.accept = accept;
    } else if (Array.isArray(accept)) {
      input.accept = accept?.join(',');
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
      onChange?.(fileList);
      return fileList;
    });
  }

  // TODO: 等待image支持函数式预览
  function preview(file: File) {}

  function handleDeleteFile(file: IFile) {
    setFiles((files: IFile[]) => {
      const fileList = files.filter((x) => x.id !== file.id);
      onChange?.(fileList);
      return fileList;
    });
  }

  return (
    <div {...rest} className={classNames(className, prefix)} style={style} ref={ref}>
      {files.length < maxCount && <div onClick={() => openUpload()}>{children}</div>}
      {files.map((file: IFile) => {
        return (
          <div key={file.id} className={`${prefix}-item`}>
            <div className={`${prefix}-item-name`} title={file.name}>
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
});

export default Upload;

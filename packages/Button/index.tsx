import React, { MouseEventHandler, useMemo } from "react";
import styles from "./index.less";

export type ButtonType = "primary" | "dashed" | "default" | "text" | "dotted";
export type ButtonSize = "large" | "middle" | "small";

export interface ButtonProps {
  // 按钮类型
  type?: ButtonType;
  // 是否禁用
  disabled?: boolean;
  // 块按钮
  block?: boolean;
  // 危险按钮
  danger?: boolean;
  // todo: 按钮添加'加载中'效果
  // // 是否加载中
  // loading?: boolean;
  // 按钮大小
  size?: ButtonSize;
  // 内联样式
  style?: React.CSSProperties;
  // 点击事件回调
  onClick?: MouseEventHandler<HTMLButtonElement>;
  // 子元素
  children?: any;
}

/**
 * 按钮
 *
 * At 2023/04/24
 * By TangJiaHui
 */
export default function Button(props: ButtonProps) {
  const classes = useMemo(() => {
    return [
      styles["btn"],
      styles[`btn-${props?.type}`],
      styles[`btn-${props?.size}`],
      props?.danger && styles["btn-danger"],
      props?.block && styles["btn-block"]
    ]
      .filter(Boolean)
      .join(" ");
  }, [
    props?.type, props?.size, props?.danger, props?.block
  ]);

  return (
    <button
      className={classes}
      disabled={props?.disabled}
      onClick={props?.onClick}
      style={props?.style}
    >
      {props?.children}
    </button>
  );
}

Button.defaultProps = {
  type: "default",
  block: false,
  disabled: false,
  danger: false,
  // loading: false,
  size: "middle"
};

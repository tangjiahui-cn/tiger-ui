import React from "react";

interface Button {
  children?: any;
}
export default function Button(props: Button) {
  return <button
    style={{
        border: '1px solid #e5e5e5',
        padding: '8px 24px',
        background: 'white',
        cursor: 'pointer',
        borderRadius: 4
    }}
  >{props?.children}</button>;
}

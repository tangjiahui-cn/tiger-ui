/**
 * Select Option
 *
 * @author tangjiahui
 * @date 2024/1/25
 */
import React from 'react';

export type SelectOptionProps = {
  children: React.ReactNode;
};
export type SelectOptionFC = React.FC<SelectOptionProps> & {
  isOption?: boolean;
};

export const SelectOption: SelectOptionFC = (props: SelectOptionProps) => null;
SelectOption.isOption = true;

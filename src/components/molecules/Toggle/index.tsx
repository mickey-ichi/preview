import React from "react";
import Switch from 'react-ios-switch';

type ToggleProps = {
    checked: boolean,
    onChange: (checked: boolean) => void
}

export const Toggle = ({checked, onChange}: ToggleProps) => {
  return <Switch
    checked={checked}
    onChange={onChange}
  />
}

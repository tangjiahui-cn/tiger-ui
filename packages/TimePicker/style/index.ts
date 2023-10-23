import useCssInJs from '../../_utils/hooks/useCssInJs';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  timepicker: () => string;
  timepickerPlaceholder: () => string;
  timepickerHeader: () => string;
} & {
  timePanel: () => string;
  timePanelPicker: () => string;
  timePanelPickerColumn: () => string;
  timePanelPickerItem: () => string;
  timePanelPickerItemChoose: () => string;
  timePanelBottom: () => string;
  timePanelBottomNow: () => string;
  timePanelBottomConfirm: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = useCssInJs({ key: prefix });
  const { css: cssPanel } = useCssInJs({ key: prefix + '-panel' });

  const hideScrollBar = (): StyleObject => {
    return {
      'scrollbar-width': 'none',
      '-ms-overflow-style': 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    };
  };

  const timepickerPlaceholder = () => `${prefix}-placeholder`;
  const timepickerHeader = () => `${prefix}-header`;
  const timePanelPicker = () => `${prefix}-panel-picker`;
  const timePanelPickerColumn = () => `${prefix}-panel-picker-column`;
  const timePanelPickerItem = () => `${prefix}-panel-picker-item`;
  const timePanelPickerItemChoose = () => `${prefix}-panel-picker-item-choose`;
  const timePanelBottom = () => `${prefix}-panel-bottom`;
  const timePanelBottomNow = () => `${prefix}-panel-bottom-now`;
  const timePanelBottomConfirm = () => `${prefix}-panel-bottom-confirm`;

  const timepicker = () =>
    css({
      [`& .${timepickerPlaceholder()}`]: {
        color: token.placeholderColor,
      },
      [`& .${timepickerHeader()}`]: {
        fontSize: token.fontSize,
        border: `1px solid ${token.borderColor}`,
        display: 'inline-block',
        padding: '8px 14px',
        cursor: 'pointer',
        transition: `all ${token.duration}`,
        userSelect: 'none',
        whiteSpace: 'nowrap',
        width: 100,
      },
    });
  const timePanel = () =>
    cssPanel({
      width: 150,
      [`& .${timePanelPicker()}`]: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        userSelect: 'none',
        borderBottom: `1px solid ${token.borderColor}`,
        [`& .${timePanelPickerColumn()}`]: {
          flex: 1,
          padding: 4,
          overflowY: 'auto',
          ...hideScrollBar(),
          '& + &': {
            borderLeft: `1px solid ${token.borderColor}`,
          },
        },
        [`& .${timePanelPickerItem()}`]: {
          textAlign: 'center',
          cursor: 'pointer',
          padding: 4,
          borderRadius: token.borderRadius,
          transition: `all ${token.duration}`,
          '& + &': {
            marginTop: 4,
          },
          '&:hover': {
            background: 'whitesmoke',
          },
          [`&.${timePanelPickerItemChoose()}`]: {
            background: token.selectPrimary,
          },
        },
      },
      [`& .${timePanelBottom()}`]: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        [`& .${timePanelBottomNow()}`]: {
          userSelect: 'none',
          cursor: 'pointer',
          color: token.color,
          transition: `all ${token.duration}`,
          '&:hover': {
            color: token.colorHover,
          },
          '&:active': {
            color: token.colorActive,
          },
        },
        [`& .${timePanelBottomConfirm()}`]: {
          userSelect: 'none',
          cursor: 'pointer',
          background: token.primary,
          transition: `all ${token.duration}`,
          padding: '4px 8px',
          borderRadius: token.borderRadius,
          color: 'white',
          '&:hover': {
            background: token.primaryHover,
          },
          '&:active': {
            background: token.primaryActive,
          },
        },
      },
    });
  return {
    timepicker,
    timepickerPlaceholder,
    timepickerHeader,
    timePanel,
    timePanelPicker,
    timePanelPickerColumn,
    timePanelPickerItem,
    timePanelPickerItemChoose,
    timePanelBottom,
    timePanelBottomNow,
    timePanelBottomConfirm,
  };
}

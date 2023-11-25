export type FontWeight = 'light' | 'normal' | 'bold';
export type FontSize = 'tiny' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Radius = 'sm' | 'md' | 'lg' | 'none';
export type Shadows = 'sm' | 'md' | 'lg' | 'xl';
export type Screen = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
export type Spacing = 'none' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ZIndex = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type BorderColors = 'light' | 'main' | 'dark';
export type GreyColors = 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;
export type SocialColors = 'facebook' | 'twitter' | 'linkedIn' | 'github';
export type GeneralColors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'info'
  | 'error'
  | 'link'
  | 'body'
  | 'white'
  | 'text'
  | 'textSecondary'
  | 'disabled'
  | 'transparent';

interface IFont {
  family: string;
  weight: { [key in FontWeight]: string };
  size: { [key in FontSize]: string };
}
type IShadows = { [key in Shadows]: string };
type IScreen = { [key in Screen]: string };
type ISpacing = { [key in Spacing]: string };
type IRadius = { [key in Radius]: string };
type IZIndex = { [key in ZIndex]: number };
export interface IColors {
  general: { [key in GeneralColors]: string };
  border: { [key in BorderColors]: string };
  grey: { [key in GreyColors]: string };
  social: { [key in SocialColors]: string };
}

export interface Theme {
  font: IFont;
  screen: IScreen;
  spacing: ISpacing;
  shadows: IShadows;
  radius: IRadius;
  zIndex: IZIndex;
  colors: IColors;
}

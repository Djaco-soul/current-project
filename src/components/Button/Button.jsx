import './Button.scss';
import classNames from 'classnames';
import Icon from "@/components/Icon";

const Button = (props) => {
  const {
      className,
      type = 'button',
      href,
      target,
      mode = '', /* default or 'transparent' or 'black-10' */
      label,
      isLabelHidden = false,
      iconName,
      iconPosition = 'before', /* 'before' or 'after' */
      hasFillIcon,

  } = props;

  const isLink = href !== undefined;
  const Component = isLink ? 'a' : 'button';
  const linkProps = {href,  target};
  const buttonProps = {type};
  const specificProps = isLink ? linkProps : buttonProps;
  const title = isLabelHidden ? label : undefined;
  const iconComponent = iconName && (
      <Icon
        className='button__icon'
        name={iconName}
        hasFill={hasFillIcon}
      />
  )

  return (
    <Component
        className={classNames(className, 'button', {
        [`button--${mode}`]: mode,
        })}
        title={title}
        aria-label={title}
        {...specificProps}
    >
        {iconPosition === 'before' && iconComponent}
        {!isLabelHidden && (
            <span className='button__label'>{label}</span>
        )}
        {iconPosition === 'after' && iconComponent}
    </Component>
  )
}

export default Button
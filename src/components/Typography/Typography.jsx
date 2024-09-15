import clsx from "clsx"
import css from "./Typography.module.css"

const Typography = ({
  children,
  className,
  variant,
  renderHeaderTag = true,
}) => {
  if (!['body', 'body2', 'h3', 'h2', 'h1'].includes(variant)) {
    throw new Error('Typography: unknown variant');
  }

  const Tag = (['h3', 'h2', 'h1'].includes(variant) && renderHeaderTag)
    ? variant
    : 'p';

  return (
    <Tag
      className={clsx(
        css.Typography,
        className,
        css[`Typography__${variant}`]
      )}
    >
      {children}
    </Tag>
  )
}

export default Typography;
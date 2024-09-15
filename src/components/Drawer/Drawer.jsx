import { useEffect } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import SvgIcon from "../SvgIcon/SvgIcon";
import css from "./Drawer.module.css";

const Drawer = ({
  children,
  className,
  open,
  onClose,
}) => {

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
  }, [open]);

  const portalRoot = document.getElementById("drawer-portal") || createPortalTarget();

  if (!open) return null;

  return createPortal(
    <div className={clsx(
      css.Drawer,
      className,
    )}
    >
      <button
        className={css.Drawer__button}
        onClick={onClose}
      >
        <SvgIcon spriteIconId="close" />
      </button>
      {children}
    </div>,
    portalRoot
  );
};

const createPortalTarget = () => {
  const portalDiv = document.createElement("div");
  portalDiv.id = "drawer-portal";
  document.body.appendChild(portalDiv);
  return portalDiv;
};

export default Drawer;

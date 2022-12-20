import React from "react";
import { CiTrash } from "react-icons/ci";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { IncreaseQty } from "../../../../store/cart/cart.Action";
import "./AdvancedButton.scss";

function AdvancedButton({ count, onPlus, onMinus, onDeleted }) {
  return (
    <div className="advanced-button">
      <FiPlus onClick={onPlus} />
      <span>{count}</span>
      <FiMinus onClick={onMinus} />
      <CiTrash onClick={onDeleted} />
    </div>
  );
}

export default AdvancedButton;

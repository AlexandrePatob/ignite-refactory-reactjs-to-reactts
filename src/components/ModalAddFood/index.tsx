import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";
import React, { FormEvent, useState } from "react";

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (data: any) => void;
}

function ModalAddFood({ isOpen, setIsOpen, handleAddFood }: ModalAddFoodProps) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    handleAddFood({
      image,
      name,
      price,
      description
    });
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <h1>Novo Prato</h1>
        <Input
          value={image}
          onChange={(event) => setImage(event.target.value)}
          name="image"
          placeholder="Cole o link aqui"
        />

        <Input
          value={name}
          onChange={(event) => setName(event.target.value)}
          name="name"
          placeholder="Ex: Moda Italiana"
        />

        <Input
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          name="price"
          placeholder="Ex: 19.90"
        />

        <Input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          name="description"
          placeholder="Descrição"
        />

        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalAddFood;

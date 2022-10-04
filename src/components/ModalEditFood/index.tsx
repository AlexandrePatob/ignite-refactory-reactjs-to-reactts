import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";

import { Food as FoodType } from "../../types";
import { FormEvent, useState } from "react";

interface ModalEditFoodProps {
  editingFood: FoodType;
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood: (data: any) => void;
}

function ModalEditFood({
  editingFood,
  isOpen,
  setIsOpen,
  handleUpdateFood,
}: ModalEditFoodProps) {
  const [image, setImage] = useState(editingFood.image);
  const [name, setName] = useState(editingFood.name);
  const [price, setPrice] = useState(editingFood.price);
  const [description, setDescription] = useState(editingFood.description);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    handleUpdateFood({
      image,
      name,
      price,
      description
    });
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <h1>Editar Prato</h1>
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

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalEditFood;

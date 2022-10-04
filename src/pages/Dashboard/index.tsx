import { useEffect, useState } from "react";

import Header from "../../components/Header";
import api from "../../services/api";
import Food from "../../components/Food";
import ModalAddFood from "../../components/ModalAddFood";
import ModalEditFood from "../../components/ModalEditFood";

import { Food as FoodType } from "../../types";

import { FoodsContainer } from "./styles";

function Dashboard() {
  const [foods, setFoods] = useState<FoodType[]>([]);
  const [editingFood, setEditingFood] = useState<FoodType>();
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

  async function handleAddFood(food: FoodType) {
    try {
      const response = await api.post("/foods", {
        ...food,
        available: true,
      });

      const foodResult = [...foods, response.data];

      setFoods(foodResult as any);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateFood(food: FoodType) {
    try {
      if (editingFood) {
        const foodUpdated = await api.put(`/foods/${editingFood.id}`, {
          ...editingFood,
          ...food,
        });

        const foodsUpdated = foods.map((f) =>
          f.id !== foodUpdated.data.id ? f : foodUpdated.data
        );

        setFoods(foodsUpdated);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteFood(id: String) {
    await api.delete(`/foods/${id}`);

    const foodsFiltered = foods.filter((food) => food.id !== id);

    setFoods(foodsFiltered);
  }

  async function toggleModal() {
    setModalOpen(!modalOpen);
  }

  async function toggleEditModal() {
    setEditModalOpen(!editModalOpen);
  }

  async function handleEditFood(food: FoodType) {
    setEditingFood(food);
    setEditModalOpen(true);
  }

  useEffect(() => {
    const getData = async () => {
      const response = await api.get("/foods");
      setFoods(response.data);
    };

    getData();
  }, []);

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />
      {editingFood && (
        <ModalEditFood
          isOpen={editModalOpen}
          setIsOpen={toggleEditModal}
          editingFood={editingFood}
          handleUpdateFood={handleUpdateFood}
        />
      )}

      <FoodsContainer data-testid="foods-list">
        {foods.map((food) => (
          <Food
            key={food.id}
            food={food}
            handleDelete={handleDeleteFood}
            handleEditFood={handleEditFood}
          />
        ))}
      </FoodsContainer>
    </>
  );
}

export default Dashboard;

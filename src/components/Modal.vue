<template>
    <teleport to=".modal-container">
      <div class="modal">
        <h4>Modal</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quibusdam laboriosam, quisquam recusandae, quos amet vero voluptatum doloremque expedita aut labore repudiandae, sint rem ex voluptatibus aspernatur magnam atque vel.</p>
        <button>Hide modal</button>  
      </div>
    </teleport>
</template>

<style>
.modal {
  background-color: bisque;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
}
</style>
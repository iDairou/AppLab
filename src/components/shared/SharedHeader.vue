<template>
  <div class="title-section">
    <h3><slot>Title name</slot></h3>
    <p>
      <slot name="description"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        voluptate?</slot
      >
    </p>
  </div>
</template>

<style scoped lang="scss">
.title-section {
  h3 {
    font-size: 40px;
    line-height: 1.1;
    margin-bottom: 20px;
    color: #242f51;
  }
  p {
    font-weight: normal;
    font-size: 15px;
    color: #616368;
    line-height: 1.2;
    margin-bottom: 30px;
  }
}
</style>

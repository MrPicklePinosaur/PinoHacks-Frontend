<template>
  <div class="faq-container">

    <div class="faq-column">
      <b-card class="faq-card">
        <b-card-text>
          What's a Hackathon?
        </b-card-text>
      </b-card>
      <b-card class="faq-card">
        <b-card-text>
          Who can participate?
        </b-card-text>
      </b-card>
    </div>

    <div class="faq-column">
      <b-card class="faq-card">
        <b-card-text>
          Does it cost anything?
        </b-card-text>
      </b-card>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Faq'
}
</script>

<style>

  .faq-container {
    background: grey;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .faq-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0.5rem;
  }

  .faq-card {
    margin: 0.5rem;
  }

</style>

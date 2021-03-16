<template>
  <div class="faq-container">

    <div class="faq-column">
      <b-card class="faq-card">
        <b-card-text>
          {{ $t('card-1')}}
        </b-card-text>
      </b-card>
      <b-card class="faq-card">
        <b-card-text>
          {{ $t('card-2') }}
        </b-card-text>
      </b-card>
    </div>

    <div class="faq-column">
      <b-card class="faq-card">
        <b-card-text>
          {{ $t('card-3') }}
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

<i18n>
{
  "en": {
    "card-1": "What's a Hackathon?",
    "card-2": "Who can participate?",
    "card-3": "Does it cost anything?"
  },
  "ja": {
    "card-1": "ハッカソンって何ですか？",
    "card-2": "誰か参できますか？",
    "card-3": "本当に無料ですか？"
  }
}
</i18n>

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

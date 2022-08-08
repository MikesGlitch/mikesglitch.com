<template>
  <NuxtLink
    class="group"
    :to="to"
    :title="title"
    :external="false"
  >
    <Card>
      <div class="flex flex-col justify-between gap-2 h-full">
        <span v-if="date" class="text-sm italic">{{ toHumanReadableDate(date) }}</span>
        <div class="flex flex-col gap-2 flex-1">
          <h5 class="font-bold group-hover:underline underline-offset-4 group-hover:text-hotpink">
            {{ title }}
          </h5>
          <span v-if="description" class="text-sm">{{ description }}</span>
        </div>
        <span v-if="category" class="text-sm">{{ category }}</span>
        <span v-if="tags.length > 0">{{ tags }}</span>
      </div>
    </Card>
  </NuxtLink>
</template>

<script type="ts" setup>
import { toHumanReadableDate } from '@/utils/dateUtils'
defineProps({
  to: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: false,
    default: undefined
  },
  description: {
    type: String,
    required: false,
    default: undefined
  },
  date: {
    type: String,
    required: false,
    default: undefined
  },
  tags: {
    type: Array,
    required: false,
    default: () => []
  },
  category: {
    type: String,
    required: false,
    default: undefined
  }
})
</script>

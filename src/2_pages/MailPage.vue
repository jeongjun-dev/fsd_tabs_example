<script lang="ts" setup>
import Mail from "@/4_features/Mail.vue";
import { accounts, mails } from "@/5_entities/mail/model/mails";
import Tabs from "@/6_shared/lib/registry/new-york/ui/tabs/Tabs.vue";
import TabsList from "@/6_shared/lib/registry/new-york/ui/tabs/TabsList.vue";
import TabsTrigger from "@/6_shared/lib/registry/new-york/ui/tabs/TabsTrigger.vue";

const tabs = ["mail", "calendar", "contacts", "tasks", "notes"];
</script>

<template>
  <div class="hidden flex-col md:flex">
    <Tabs default-value="mail">
      <TabsList>
        <TabsTrigger
          v-for="(tab, index) in tabs"
          :key="tab"
          :value="tabs[index]"
        >
          {{ tabs[index] }}
        </TabsTrigger>
      </TabsList>
    </Tabs>

    <Mail :accounts="accounts" :mails="mails" :nav-collapsed-size="4" />
  </div>
</template>

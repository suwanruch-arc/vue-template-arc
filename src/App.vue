<template>
  <main v-if="$q.platform.is.mobile">
    <RouterView />
  </main>
  <div v-else class="q-pa-sm text-red">
    ลูกค้าจะต้องทำรายการจากโทรศัพท์มือถือที่มีหมายเลขที่ลงทะเบียนเท่านั้น
    และไม่เชื่อมต่อสัญญาณ WIFI
  </div>
</template>

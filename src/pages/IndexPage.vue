<template>
  <div class="text-h3 q-ma-lg">สวัสดีชาวโลก</div>
  <div class="text-h3 q-ma-lg">Hello World</div>
  <p>หนึ่ง + 2 เท่ากับ three</p>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
</template>

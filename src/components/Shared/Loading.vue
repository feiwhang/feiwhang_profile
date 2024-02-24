<template>
  <div id="loading" @wheel.prevent @touchmove.prevent @scroll.prevent>
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="LoadingLogo">
        <g id="F">
          <path
            id="F1"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31 5C37.6274 5 43 10.3726 43 17L43 79C43 85.6274 37.6274 91 31 91C24.3726 91 19 85.6274 19 79L19 17C19 10.3726 24.3726 5 31 5ZM41 17C41 22.5228 36.5228 27 31 27C25.4772 27 21 22.5228 21 17C21 11.4772 25.4772 7 31 7C36.5228 7 41 11.4772 41 17ZM31 59C35.9706 59 40 54.9706 40 50C40 45.0294 35.9706 41 31 41C26.0294 41 22 45.0294 22 50C22 54.9706 26.0294 59 31 59Z"
            fill="#7253C6"
          />
          <path
            id="F3"
            d="M55 50H31"
            stroke="#8E6FE2"
            stroke-width="18"
            stroke-linecap="round"
          />
          <path
            id="F2"
            d="M67 17L31 17"
            stroke="#8E6FE2"
            stroke-width="20"
            stroke-linecap="round"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
$duration: 0.55s;

#loading {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: var(--bgColor);
  height: 100vh;
  width: 100vw;
  text-align: center;
  line-height: 100vh;
  svg {
    margin: auto;
    width: min(25vw, 256px);
    animation: zoomFadeAway $duration ease-in-out calc($duration * 3.25)
      forwards;
    backface-visibility: hidden;
  }
}

// animation
#F {
  animation: zoomFadeIn $duration ease-in-out forwards;
  transform-origin: center;
  backface-visibility: hidden;
}
#F2 {
  --offset: 8.2px;
  transform: translate3d(0, 0, 0);
  animation: stickOut $duration ease-in-out $duration forwards;
  backface-visibility: hidden;
}
#F3 {
  --offset: 5px;
  transform: translate3d(0, 0, 0);
  animation: stickOut $duration ease-in-out calc($duration * 2) forwards;
  backface-visibility: hidden;
}
@keyframes stickOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  75% {
    transform: translate3d(calc(var(--offset) + 3px), 0, 0);
  }
  100% {
    transform: translate3d(var(--offset), 0, 0);
  }
}
@keyframes zoomFadeIn {
  from {
    opacity: 0;
    transform: scale(0.69) translateZ(0);
  }
  to {
    opacity: 1;
    transform: scale(1) translateZ(0);
  }
}
@keyframes zoomFadeAway {
  0% {
    opacity: 1;
    transform: scale(1) translateZ(0);
  }
  30% {
    opacity: 0.88;
    transform: scale(1.069) translateZ(0);
  }
  100% {
    opacity: 0;
    transform: scale(0.123) translateZ(0);
  }
}
</style>

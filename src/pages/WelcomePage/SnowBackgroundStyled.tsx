import styled from "styled-components";

const SnowBackgroundStyled = styled.div`
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #c7d7ed;

  .snowflake {
    --size: 1vw;
    width: var(--size);
    height: var(--size);
    background: white;
    border-radius: 50%;
    position: absolute;
    top: -5vh;
  }
  @keyframes snowfall {
    0% {
      transform: translate3d(var(--left-ini), 0, 0);
    }
    100% {
      transform: translate3d(var(--left-end), 110vh, 0);
    }
  }
  .snowflake:nth-child(1) {
    --size: 0.8vh;
    --left-ini: 5vw;
    --left-end: -8vw;
    left: 15vw;
    animation: snowfall 63s linear infinite;
    animation-delay: -18s;
  }
  .snowflake:nth-child(2) {
    --size: 1vh;
    --left-ini: 2vw;
    --left-end: 7vw;
    left: 39vw;
    animation: snowfall 28s linear infinite;
    animation-delay: -6s;
  }
  .snowflake:nth-child(3) {
    --size: 2vh;
    --left-ini: -1vw;
    --left-end: 3vw;
    left: 80vw;
    animation: snowfall 23s linear infinite;
    animation-delay: -44s;
  }
  .snowflake:nth-child(4) {
    --size: 0.8vh;
    --left-ini: -4vw;
    --left-end: 10vw;
    left: 38vw;
    animation: snowfall 65s linear infinite;
    animation-delay: -35s;
  }
  .snowflake:nth-child(5) {
    --size: 0.5vh;
    --left-ini: 3vw;
    --left-end: 2vw;
    left: 64vw;
    animation: snowfall 63s linear infinite;
    animation-delay: -9s;
  }
  .snowflake:nth-child(6) {
    --size: 0.8vh;
    --left-ini: 10vw;
    --left-end: -5vw;
    left: 2vw;
    animation: snowfall 15s linear infinite;
    animation-delay: -38s;
  }
  .snowflake:nth-child(7) {
    --size: 0.5vh;
    --left-ini: 5vw;
    --left-end: 6vw;
    left: 31vw;
    animation: snowfall 44s linear infinite;
    animation-delay: -43s;
  }
  .snowflake:nth-child(8) {
    --size: 0.6vh;
    --left-ini: -2vw;
    --left-end: -4vw;
    left: 66vw;
    animation: snowfall 65s linear infinite;
    animation-delay: -58s;
  }
  .snowflake:nth-child(9) {
    --size: 1vh;
    --left-ini: 6vw;
    --left-end: 5vw;
    left: 81vw;
    animation: snowfall 50s linear infinite;
    animation-delay: -13s;
  }
  .snowflake:nth-child(10) {
    --size: 0.7vh;
    --left-ini: 9vw;
    --left-end: 10vw;
    left: 6vw;
    animation: snowfall 30s linear infinite;
    animation-delay: -34s;
  }
  .snowflake:nth-child(11) {
    --size: 0.9vh;
    --left-ini: 0vw;
    --left-end: -9vw;
    left: 32vw;
    animation: snowfall 49s linear infinite;
    animation-delay: -50s;
  }
  .snowflake:nth-child(12) {
    --size: 1.5vh;
    --left-ini: -1vw;
    --left-end: -1vw;
    left: 13vw;
    animation: snowfall 51s linear infinite;
    animation-delay: -51s;
  }
  .snowflake:nth-child(13) {
    --size: 1.3vh;
    --left-ini: 1vw;
    --left-end: 1vw;
    left: 80vw;
    animation: snowfall 25s linear infinite;
    animation-delay: -27s;
  }
  .snowflake:nth-child(14) {
    --size: 1.6vh;
    --left-ini: 10vw;
    --left-end: 6vw;
    left: 51vw;
    animation: snowfall 46s linear infinite;
    animation-delay: -40s;
  }
  .snowflake:nth-child(15) {
    --size: 1.2vh;
    --left-ini: -9vw;
    --left-end: 4vw;
    left: 32vw;
    animation: snowfall 19s linear infinite;
    animation-delay: -22s;
  }
  .snowflake:nth-child(16) {
    --size: 1vh;
    --left-ini: 0vw;
    --left-end: 8vw;
    left: 54vw;
    animation: snowfall 29s linear infinite;
    animation-delay: -25s;
  }
  .snowflake:nth-child(17) {
    --size: 0.6vh;
    --left-ini: 4vw;
    --left-end: 2vw;
    left: 39vw;
    animation: snowfall 19s linear infinite;
    animation-delay: -32s;
  }
  .snowflake:nth-child(18) {
    --size: 2vh;
    --left-ini: -3vw;
    --left-end: -2vw;
    left: 74vw;
    animation: snowfall 21s linear infinite;
    animation-delay: -22s;
  }
  .snowflake:nth-child(19) {
    --size: 1vh;
    --left-ini: -1vw;
    --left-end: -1vw;
    left: 100vw;
    animation: snowfall 64s linear infinite;
    animation-delay: -44s;
  }
  .snowflake:nth-child(20) {
    --size: 0.9vh;
    --left-ini: 9vw;
    --left-end: -8vw;
    left: 30vw;
    animation: snowfall 58s linear infinite;
    animation-delay: -12s;
  }
  .snowflake:nth-child(21) {
    --size: 1.3vh;
    --left-ini: 1vw;
    --left-end: 3vw;
    left: 92vw;
    animation: snowfall 35s linear infinite;
    animation-delay: -25s;
  }
  .snowflake:nth-child(22) {
    --size: 1.7vh;
    --left-ini: 0vw;
    --left-end: -3vw;
    left: 35vw;
    animation: snowfall 49s linear infinite;
    animation-delay: -54s;
  }
  .snowflake:nth-child(23) {
    --size: 2vh;
    --left-ini: -1vw;
    --left-end: 9vw;
    left: 93vw;
    animation: snowfall 9s linear infinite;
    animation-delay: -11s;
  }
  .snowflake:nth-child(24) {
    --size: 0.6vh;
    --left-ini: 3vw;
    --left-end: -7vw;
    left: 41vw;
    animation: snowfall 61s linear infinite;
    animation-delay: -51s;
  }
  .snowflake:nth-child(25) {
    --size: 2.5vh;
    --left-ini: -6vw;
    --left-end: 5vw;
    left: 24vw;
    animation: snowfall 63s linear infinite;
    animation-delay: -15s;
  }
  .snowflake:nth-child(26) {
    --size: 1vh;
    --left-ini: 6vw;
    --left-end: 3vw;
    left: 96vw;
    animation: snowfall 25s linear infinite;
    animation-delay: -6s;
  }
  .snowflake:nth-child(27) {
    --size: 0.9vh;
    --left-ini: -2vw;
    --left-end: -2vw;
    left: 21vw;
    animation: snowfall 6s linear infinite;
    animation-delay: -45s;
  }
  .snowflake:nth-child(28) {
    --size: 0.9vh;
    --left-ini: -3vw;
    --left-end: -3vw;
    left: 68vw;
    animation: snowfall 49s linear infinite;
    animation-delay: -6s;
  }
  .snowflake:nth-child(29) {
    --size: 1vh;
    --left-ini: 3vw;
    --left-end: -8vw;
    left: 28vw;
    animation: snowfall 24s linear infinite;
    animation-delay: -36s;
  }
  .snowflake:nth-child(30) {
    --size: 3vh;
    --left-ini: 2vw;
    --left-end: -3vw;
    left: 67vw;
    animation: snowfall 27s linear infinite;
    animation-delay: -26s;
  }
  .snowflake:nth-child(31) {
    --size: 0.4vh;
    --left-ini: 1vw;
    --left-end: 0vw;
    left: 79vw;
    animation: snowfall 6s linear infinite;
    animation-delay: -6s;
  }
  .snowflake:nth-child(32) {
    --size: 0.8vh;
    --left-ini: 5vw;
    --left-end: 8vw;
    left: 42vw;
    animation: snowfall 55s linear infinite;
    animation-delay: -34s;
  }
  .snowflake:nth-child(33) {
    --size: 1vh;
    --left-ini: 5vw;
    --left-end: -4vw;
    left: 59vw;
    animation: snowfall 20s linear infinite;
    animation-delay: -43s;
  }
  .snowflake:nth-child(34) {
    --size: 1.9vh;
    --left-ini: -3vw;
    --left-end: 0vw;
    left: 46vw;
    animation: snowfall 38s linear infinite;
    animation-delay: -51s;
  }
  .snowflake:nth-child(35) {
    --size: 0.6vh;
    --left-ini: 3vw;
    --left-end: 2vw;
    left: 63vw;
    animation: snowfall 33s linear infinite;
    animation-delay: -27s;
  }
  .snowflake:nth-child(36) {
    --size: 0.8vh;
    --left-ini: -2vw;
    --left-end: -3vw;
    left: 69vw;
    animation: snowfall 16s linear infinite;
    animation-delay: -19s;
  }
  .snowflake:nth-child(37) {
    --size: 0.9vh;
    --left-ini: -4vw;
    --left-end: 6vw;
    left: 4vw;
    animation: snowfall 16s linear infinite;
    animation-delay: -25s;
  }
  .snowflake:nth-child(38) {
    --size: 1vh;
    --left-ini: 8vw;
    --left-end: -3vw;
    left: 60vw;
    animation: snowfall 64s linear infinite;
    animation-delay: -43s;
  }
  .snowflake:nth-child(39) {
    --size: 2vh;
    --left-ini: 4vw;
    --left-end: -4vw;
    left: 4vw;
    animation: snowfall 39s linear infinite;
    animation-delay: -22s;
  }
  .snowflake:nth-child(40) {
    --size: 2vh;
    --left-ini: 1vw;
    --left-end: -1vw;
    left: 95vw;
    animation: snowfall 15s linear infinite;
    animation-delay: -44s;
  }
  .snowflake:nth-child(41) {
    --size: 0.9vh;
    --left-ini: 1vw;
    --left-end: 5vw;
    left: 78vw;
    animation: snowfall 37s linear infinite;
    animation-delay: -19s;
  }
  .snowflake:nth-child(42) {
    --size: 1vh;
    --left-ini: 3vw;
    --left-end: 9vw;
    left: 48vw;
    animation: snowfall 57s linear infinite;
    animation-delay: -18s;
  }
  .snowflake:nth-child(43) {
    --size: 1vh;
    --left-ini: -7vw;
    --left-end: -8vw;
    left: 87vw;
    animation: snowfall 17s linear infinite;
    animation-delay: -60s;
  }
  .snowflake:nth-child(44) {
    --size: 0.8vh;
    --left-ini: -1vw;
    --left-end: -6vw;
    left: 92vw;
    animation: snowfall 11s linear infinite;
    animation-delay: -19s;
  }
  .snowflake:nth-child(45) {
    --size: 1vh;
    --left-ini: 1vw;
    --left-end: 5vw;
    left: 45vw;
    animation: snowfall 45s linear infinite;
    animation-delay: -4s;
  }
  .snowflake:nth-child(46) {
    --size: 0.9vh;
    --left-ini: -5vw;
    --left-end: 3vw;
    left: 13vw;
    animation: snowfall 61s linear infinite;
    animation-delay: -36s;
  }
  .snowflake:nth-child(47) {
    --size: 1vh;
    --left-ini: 1vw;
    --left-end: -9vw;
    left: 87vw;
    animation: snowfall 26s linear infinite;
    animation-delay: -26s;
  }
  .snowflake:nth-child(48) {
    --size: 0.8vh;
    --left-ini: -9vw;
    --left-end: -8vw;
    left: 3vw;
    animation: snowfall 37s linear infinite;
    animation-delay: -49s;
  }
  .snowflake:nth-child(49) {
    --size: 2vh;
    --left-ini: -1vw;
    --left-end: 3vw;
    left: 8vw;
    animation: snowfall 20s linear infinite;
    animation-delay: -59s;
  }
  .snowflake:nth-child(50) {
    --size: 1.9vh;
    --left-ini: -9vw;
    --left-end: 2vw;
    left: 39vw;
    animation: snowfall 60s linear infinite;
    animation-delay: -6s;
  }
  .snowflake:nth-child(6n) {
    filter: blur(1px);
  }
`;

export default SnowBackgroundStyled;

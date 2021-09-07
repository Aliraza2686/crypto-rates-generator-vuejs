<template>

  
           <div v-if="loader">
               <div class="loading">Loading&#8230;</div>
           </div>
             <div class="jumbotron text-light">
                
             <div class="content">
                    <h1>Get Crypto Currencies Rates</h1>
                <p >Top 3 crypto currencies, Their current rates, #Rank, Supply and all the updates you need to know.</p>
                <hr class="">
                <p>Choose currency type from EUR or $USD to generate most recent crypto currencies rates.</p>
           
                    <div class="button">
                        <select class="form-control" v-model="convert">
                            <option value="USD" selected>$USD</option>
                            <option value="EUR">EUR</option>
                        </select>
                        <button class="btn btn-primary btn-block my-3" @click="getRates">Get Rates</button>
                    </div>
             </div>
         </div>

<div class="">
    <div v-for="item in crypto" :key="item.id">
        <div class="item p-5 m-5">
            <div class="data">
               <div class="row">
                   <div class="col-md-4 text-center">
                        <img :src="item.logo_url" alt="" srcset="" class="img">
                        <h3>{{item.name}}</h3>
                   </div>
                   <div class="col-md-5">
                       <h3 class="text-center text-warning">  <i class="fas fa-chart-line"></i> Price Right Now</h3>
                       <h2 class="mt-3 text-center">
                          <span v-if="convert === 'USD' ">$</span> <span v-else>Euro</span> {{item.price}}</h2>
                          <h5 class="text-center"> Price Date : {{item.price_date}}</h5>
                   </div>
                   <div class="col-md-3">
                       <h3 class="text-center mt-3">
                           Rank <br>
                           #{{item.rank}}
                       </h3>
                   </div>
               </div>

               <div class="more mt-5">
                   <button class="details"><span class="bg-primary text-light py-2 px-3">Highest :</span> {{item.high}}</button>
                   <button class="details"><span class="bg-primary text-light py-2 px-3">Highest Date :</span> {{item.high_timestamp}}</button>
                   <button class="details"><span class="bg-primary text-light py-2 px-3">Market Cap :</span> {{item.market_cap}}</button>
                   <button class="details"><span class="bg-primary text-light py-2 px-3">First Trade:</span> {{item.first_trade}}</button>
                   <button class="details"><span class="bg-primary text-light py-2 px-3">First Order Book:</span> {{item.first_order_book}}</button>
                   <button class="details"><span class="bg-primary text-light py-2 px-3">Circulating Supply:</span> {{item.circulating_supply}}</button>
                   <button class="details"><span class="bg-primary text-light py-2 px-3">Max Supply:</span> {{item.max_supply}}</button>
                   <button class="details"><span class="bg-primary text-light py-2 px-3">Num Pairs:</span> {{item.num_pairs}}</button>
                   <button class="details"><span class="bg-primary text-light py-2 px-3">Num Exchanges:</span> {{item.num_exchanges}}</button>
               </div>
            </div>
        </div>
    </div>
</div>
   
</template>

<script>
import axios from 'axios'
export default {
 data() {
     return {
       crypto : [],
       convert : '',
       loader : false
     }
 },
 methods : {
     async getRates() {
         this.loader = true
         const key = '9d2094063c915c0dc4aa4fa5b68de8185afce40b'
         const convert = this.convert
         const res = await axios.get(`https://api.nomics.com/v1/currencies/ticker?key=${key}&ids=BTC,ETH,XRP&interval=1d,30d&convert=${convert}&per-page=100&page=1`)
       
          this.crypto = res.data
          this.loader = false
    }
 }
}
</script>

<style scoped>
.jumbotron {
    background-image: url('../../public/img/bg.jpg');
    background-size: cover;
    height: 80vh;
}
.content {
    background-color: rgb(0,0,0,0.7);
     width: 50%;
     padding: 15px;
}
@media(max-width : 500px) {
    .content {
        width: 80%;
    }
   .jumbotron {
       height: 95vh;
       background-size: 90vh;
   }
}
.loading {
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: visible;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;

  right: 0;
}

/* Transparent Overlay */
.loading:before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
}

/* :not(:required) hides these rules from IE9 and below */
.loading:not(:required) {
  /* hide "loading..." text */
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.loading:not(:required):after {
  content: '';
  display: block;
  font-size: 10px;
  width: 1em;
  height: 1em;
  margin-top: -0.5em;
  -webkit-animation: spinner 1500ms infinite linear;
  -moz-animation: spinner 1500ms infinite linear;
  -ms-animation: spinner 1500ms infinite linear;
  -o-animation: spinner 1500ms infinite linear;
  animation: spinner 1500ms infinite linear;
  border-radius: 0.5em;
  -webkit-box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0, rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
}

/* Animation */

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-moz-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-o-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.res {
    background-color: #f2f2f2;
    padding: 20px;
}
.item {
    background-image: url('../../public/img/crypto1.jpg');
    background-size: cover;
    color : #fff;
    opacity: 0.9;
}
.data {
    opacity: 10;
}
.img {
    width: 25%;
}
.details {
    background-color: #f2f2f2;
    border: 2px #f2f2f2;
    border-radius: 5px;
    margin: 10px;
    padding : 7px;
}
</style>
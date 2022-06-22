<template>
  <p v-texto="configuracaoTexto">
  Minha primeira diretiva customizada
  </p>
  <p v-texto="{
    cor: 'orange',
    tamanhoFonte: '300%',
    totalCaracteres: 20
  }">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
  <div v-posicao:absolute="89" v-texto="{
    cor: 'blue',
    tamanhoFonte: '300%',
    totalCaracteres: 20
  }">Binding de argumento e valor</div>
  <div>
    <span>Código A: </span><input type="text"><span v-informacao:simples.umCliqueMouse="'voce encontrará o codigo na frente'">i</span>
  </div>
  <div>
    <span>Código B: </span><input type="text"><span v-informacao:destacado.doisCliqueMouse.sairAutomaticamente="'voce encontrará o codigo na parte de trás'">i</span>
  </div>
  <h1 v-colorir-fundo-texto="'red'">
    Diretiva customizada local
  </h1>
</template>

<script>
import colorirFundoTexto from './directives/colorirFundoTexto.js';
export default {
  name: 'App',
  directives: {
    colorirFundoTexto: colorirFundoTexto
  },
  data: () => ({
    configuracaoTexto: {
      cor: 'red',
      tamanhoFonte: '200%',
      totalCaracteres: 15
    }
  })
}
</script>

import { createApp } from 'vue'
import App from './App.vue'
import informacao from './directives/informacao.js';
import posicao from './directives/posicao.js';
import texto from './directives/texto.js';

const vue = createApp(App);

vue.directive('texto', texto);
vue.directive('posicao', posicao);
vue.directive('informacao', informacao);

/* Diretão
vue.directive('texto', {
    created(el, binding) { // chamado antes que os atributos do elemente ou ouvintes de event (event listeners) sejam aplicados
        if(binding.value?.cor)  el.style.color = binding.value.cor;
        if(binding.value?.tamanhoFonte)  el.style.fontSize = binding.value.tamanhoFonte;

        let totalCaracteres = (binding.value?.totalCaracteres) ? binding.value.totalCaracteres : 25;
        let textoOriginal = el.innerText;
        let tamanhoTextoOriginal = textoOriginal.length;

        if(tamanhoTextoOriginal > totalCaracteres) {
            el.innerText = textoOriginal.substring(0, (totalCaracteres-3))+'...';
        }
    }
});

vue.directive('posicao', {
    created(elemento, binding) {
        const posicoesPossiveis = ['fixed', 'relative', 'absolute'];
        if(posicoesPossiveis.includes(binding.arg)) {
            elemento.style.position = binding.arg;
            elemento.style.top = `${binding.value}px`;
        }
    }
});

vue.directive('informacao', {
    created(elemento, binding) {
        let funcao = () => {};

        if(binding.arg == undefined || binding.arg === 'simples') {
            funcao = function() {
                let informacaoSpan = document.createElement('span');
                informacaoSpan.style.position = 'absolute';
                informacaoSpan.style.background = '#ddd';
                informacaoSpan.style.padding = '2px';
                informacaoSpan.innerText = binding.value;
                elemento.appendChild(informacaoSpan);

                informacaoSpan.addEventListener('click', (event) => {
                    event.stopPropagation();
                    informacaoSpan.remove();
                });

                if(binding.modifiers['sairAutomaticamente']){
                    setTimeout(() => {
                        informacaoSpan.remove();
                    }, 3000);
                }
            }
        } 
        else if(binding.arg === 'destacado') {
            funcao = function() {
                let informacaoDivContainer = document.createElement('div');
                let informacaoDiv = document.createElement('div');
                informacaoDiv.innerHTML = binding.value;

                informacaoDiv.style.padding = '30px';
                informacaoDiv.style.width = '100%';
                informacaoDiv.style.textAlign = 'center';
                informacaoDiv.style.background = '#fba';

                informacaoDivContainer.style.width = '100%';
                informacaoDivContainer.style.height = '100%';
                informacaoDivContainer.style.display = 'flex';
                informacaoDivContainer.style.flexDirection = 'row';
                informacaoDivContainer.style.alignItems = 'center';
                informacaoDivContainer.style.justifyContent = 'center';
                informacaoDivContainer.style.background = '#ccc';
                informacaoDivContainer.style.position = 'absolute';
                informacaoDivContainer.style.top = '0';
                informacaoDivContainer.style.zIndex = '10';

                informacaoDivContainer.appendChild(informacaoDiv);

                elemento.appendChild(informacaoDivContainer);
                informacaoDivContainer.addEventListener('click', (event) => {
                    event.stopPropagation();
                    informacaoDivContainer.remove();
                });

                if(binding.modifiers['sairAutomaticamente']){
                    setTimeout(() => {
                        informacaoDivContainer.remove();
                    }, 3000);
                }
            }
        }

        if(binding.modifiers['umCliqueMouse']) {
            elemento.addEventListener('click', funcao);
        }
        if(binding.modifiers['doisCliqueMouse']) {
            elemento.addEventListener('dblclick', funcao);
        }
    }
});
*/
vue.mount('#app');

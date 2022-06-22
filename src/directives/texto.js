export default {
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
};
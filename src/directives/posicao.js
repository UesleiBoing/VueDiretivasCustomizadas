export default {
    created(elemento, binding) {
        const posicoesPossiveis = ['fixed', 'relative', 'absolute'];
        if(posicoesPossiveis.includes(binding.arg)) {
            elemento.style.position = binding.arg;
            elemento.style.top = `${binding.value}px`;
        }
    }
};
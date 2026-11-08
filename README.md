# Example of Emits and Props in Vue

Exemple Tema 4 Unitat 2 UOC JavaScript C1

1. Defineix les propietats i els valors per defecte

const props = withDefaults(defineProps<CounterProps>(), {
initial: 0,
step: 1,
});

- defineProps<CounterProps>() defineix les propietats que pot rebre el component, segons el tipus CounterProps.
- withDefaults() estableix els valors per defecte: initial serà 0 i step serà 1 si no es passen.

2. Defineix l’esdeveniment que pot emetre

const emit = defineEmits<{
(e: 'update', value: number): void;
}>();

Declara un esdeveniment anomenat update que envia un valor de tipus number.

La signatura indica:

- e: 'update': el nom de l’esdeveniment.
- value: number: la dada que s’envia.
- void: la crida no retorna cap valor.

Per exemple:
emit('update', 5);

3. Crea l’estat del comptador

const count = ref<number>(props.initial);

Crea una referència reactiva numèrica amb el valor inicial rebut.

Es copia el valor inicial: si després el pare modifica props.initial, count no s’actualitza automàticament.

4. Defineix les operacions

const increment = () => {
count.value += props.step;
};

const decrement = () => {
count.value -= props.step;
};

Incrementen o redueixen el comptador segons step. Per exemple, si step és 2, sumaràs o restaràs de dos en dos.

En el codi TypeScript accedeixes al valor del ref amb .value.

5. Avisa el pare quan canvia el comptador

watch(count, (v) => emit('update', v));

Observa count. Quan canvia, rep el nou valor a v i emet l’esdeveniment update amb aquest valor.

El pare el pot escoltar així:

<CounterComponent :initial="14" @update="last = $event" />

La variable last rep el valor enviat pel fill amb emit('update', v). Al template del pare, aquest valor és accessible mitjançant $event.

const last = ref(0);

Aquest watch no emet el valor inicial en crear-se; s’executa quan detecta un canvi.

6. Utilitza un composable per obtenir càlculs
   const { square, factorial } = useCounterMath(count);

Crida useCounterMath passant-li la referència reactiva count i extreu les propietats square i factorial del resultat amb desestructuració.

Pels noms, probablement representen el quadrat i el factorial del comptador. Cal veure la implementació de useCounterMath per confirmar com es calculen i si s’actualitzen reactivament.

<script lang="ts">
    interface Props {
        url: string;
        label: string;
        ariaLabel: string;
        bgColor: string;
        color: string;
    }

    const { 
        url, 
        label, 
        ariaLabel,
        title,
        bgColor = '#000',
        color = '#fff'
    }: Props = $props();
</script>

{#if url && label}
    <a 
        href={url} 
        class="cta-link"
        aria-label={ariaLabel}
        title={title}
        style="--bgColor: {bgColor}; --color: {color};"
    >
        <span>{label}</span>
        <span class="material-symbols-outlined arrow">trending_flat</span>
    </a>
{/if}

<style lang="scss">
    .arrow {
        margin-left: 0.5rem;
        transform: scaleX(1.5);
    }

    .cta-link {
        align-items: center;
        align-content: center;
        background-color: var(--bgColor);
        border-radius: 0.5rem;
        color: var(--color);
        cursor: pointer;
        display: flex;
        font-family: 'Quicksand', 'Poppins', sans-serif;
        justify-content: center;
        padding: 0.5rem 1.5rem;
        text-decoration: none;
        width: fit-content;

        &:hover {
            background-color: #333;
        }
    }

    .material-symbols-outlined {
        font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
    }
</style>
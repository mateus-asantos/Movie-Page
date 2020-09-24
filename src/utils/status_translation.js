const statusTranslation = (status) => {
    /* traduzindo status */
    switch (status) {
        case 'Rumored':
            return 'Rumores'
        case 'Planned':
            return 'Planejado'
        case 'In Production':
            return 'Em produção'
        case 'Post Production':
            return 'Pós-produção'
        case 'Released':
            return 'Lançado'
        case 'Canceled':
            return 'Cancelado '
        default:
            break;
    }
}

export default statusTranslation
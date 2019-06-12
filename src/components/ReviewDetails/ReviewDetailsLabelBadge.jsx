import React from 'react';
import { Badge } from 'react-bootstrap';

function ReviewDetailsLabelBadge({label}) {
    if (label.name.includes('appian')) {
        return <Badge variant="info">{label.name}</Badge>
    } else if (label.name.includes('ror')) {
        return <Badge variant="primary">{label.name}</Badge>
    } else if (label.name.includes('release')) {
        return <Badge variant="danger">{label.name}</Badge>
    } else if (label.name.includes('sprint')) {
        return <Badge variant="success">{label.name}</Badge>
    } else {
        return <Badge variant="secondary">{label.name}</Badge>
    }
}

export default ReviewDetailsLabelBadge;
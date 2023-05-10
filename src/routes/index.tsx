import { Route, Routes, Navigate } from 'react-router-dom';
import { Characters } from '../pages/Characters';
import { Episodes } from '../pages/Episodes';
import { Locations } from '../pages/Locations';

export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/characters" replace />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/locations" element={<Locations />} />
        </Routes>

    );
}
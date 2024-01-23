'use client';

import { useContext } from 'react';
import { Locale } from '@/lib/i18n-config';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

export function CartViewer({
    lang,
    dictionary,
}: {
    lang: Locale;
    dictionary: {
        total: string;
    };
}) {
    return (
        <table className="w-full border-collapse">
            <tbody>
            </tbody>
            <tfoot>
                <tr>
                    <td />
                    <td className="w-full py-3" colSpan={3}>
                        <p className="text-right text-2xl font-bold">
                            {dictionary.total}
                        </p>
                    </td>
                    <td className="px-4">
                        <p className="text-3xl font-bold">
                        </p>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
}
